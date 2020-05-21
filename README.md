# CHAT-SPACE DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|gruop_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|message|string|null: false|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|gruop_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
