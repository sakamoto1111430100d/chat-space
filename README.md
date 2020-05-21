# CHAT-SPACE DB設計
## usersテーブル
|Column|Tyoe|Option|
|------|----|------|
|user_name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :users_groups
- has_many :messages

## groupsテーブル
|Column|Tyoe|Option|
|------|----|------|
|group_name|string|null: false|
### Association
- has_many :messages
- has_many :users_groups

## users_groupsテーブル
|Column|Tyoe|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|gruop_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル
|Column|Tyoe|Option|
|------|----|------|
|message|string|null: false|
|user_id|integer|null: false, foreign-key: true|
|gruop_id|integer|null: false, foreign-key: true|
### Association
- has_many :images
- belongs_to :user
- belongs_to :group

## imageテーブル
|Column|Tyoe|Option|
|------|----|------|
|image|string|null: false|
|message_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :message
