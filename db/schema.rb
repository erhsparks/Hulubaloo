# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161108190346) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.integer  "showing_id", null: false
    t.integer  "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["parent_id"], name: "index_comments_on_parent_id", using: :btree
  add_index "comments", ["showing_id"], name: "index_comments_on_showing_id", using: :btree

  create_table "movie_nights", force: :cascade do |t|
    t.integer  "host_id",                    null: false
    t.integer  "video_id",                   null: false
    t.string   "title"
    t.date     "date",                       null: false
    t.time     "time",                       null: false
    t.boolean  "active",     default: false, null: false
    t.string   "currency",                   null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "movie_nights", ["host_id"], name: "index_movie_nights_on_host_id", using: :btree
  add_index "movie_nights", ["title"], name: "index_movie_nights_on_title", using: :btree
  add_index "movie_nights", ["video_id"], name: "index_movie_nights_on_video_id", using: :btree

  create_table "screenings", force: :cascade do |t|
    t.integer  "movie_night_id", null: false
    t.integer  "viewer_id",      null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "screenings", ["movie_night_id"], name: "index_screenings_on_movie_night_id", using: :btree
  add_index "screenings", ["viewer_id"], name: "index_screenings_on_viewer_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "video_categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "video_categories", ["name"], name: "index_video_categories_on_name", unique: true, using: :btree

  create_table "video_categorizings", force: :cascade do |t|
    t.integer  "video_id",    null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "video_categorizings", ["category_id"], name: "index_video_categorizings_on_category_id", using: :btree
  add_index "video_categorizings", ["video_id", "category_id"], name: "index_video_categorizings_on_video_id_and_category_id", unique: true, using: :btree

  create_table "videos", force: :cascade do |t|
    t.string   "title",             null: false
    t.text     "description",       null: false
    t.string   "video_url",         null: false
    t.string   "preview_image_url", null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "videos", ["title"], name: "index_videos_on_title", using: :btree
  add_index "videos", ["video_url"], name: "index_videos_on_video_url", unique: true, using: :btree

end
