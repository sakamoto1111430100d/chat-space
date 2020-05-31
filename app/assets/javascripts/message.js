$(function() {
  function buildHTML(message) {
    if ( message.image ) {
      var html = 
        `<div class="message-list">
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
        `<div class="message-list">
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
    var url = $(this).attr('action')
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
      console.log(html);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset()
      $('.message-form__send-btn').prop('disabled', false)
    })
    .fail(function() {
      alert("メッセージ通信に失敗しました");
    })
  })
})