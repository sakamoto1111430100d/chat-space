# CHAT-SPACE DB設計
## usersテーブル
|Column|Tyoe|Option|
|------|----|------|
|user_name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has-many :users_groups
- has-many :messages

## groupsテーブル
|Column|Tyoe|Option|
|------|----|------|
|group_name|string|null: false|
### Association
- has-many :messages
- has-many :users-groups
