$(function() {
  function buildHTML(message) {
    if ( message.image ) {
      var html = 
        `<div class="message-list" data-message-id=${message.id}>
            <div class="message__header">
                <div class="message__header--name">
                    ${message.user_name}
                </div>
                <div class="message__header--date">
                    ${message.created_at}
                </div>
            </div>
            <div class="message__message">
                <p class="message__message__content">
                    ${message.content}
                </p>
                <img src=" ${message.image} " class="message__message__content__image" >
            </div>
        </div>`
      return html;
    } else {
      var html =
        `<div class="message-list" data-message-id=${message.id}>
            <div class="message__header">
                <div class="message__header--name">
                    ${message.user_name}
                </div>
                <div class="message__header--date">
                    ${message.created_at}
                </div>
            </div>
            <div class="message__message">
                <p class="message__message__content">
                    ${message.content}
                </p>
            </div>
        </div>`
      return html;
    };
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset()
      $('.message-form__send-btn').prop('disabled', false)
    })
    .fail(function() {
      alert("メッセージ通信に失敗しました");
    })
  })
  var reloadMessages = function() {
    var last_message_id = $('.message-list:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.message-list').append(insertHTML);
        $('.message-list').animate({scrollTop: $('.message-list')[0].scrollHeight});
      }   
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
