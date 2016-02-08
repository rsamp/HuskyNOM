json.extract!(review, :id, :author_id, :business_id,
              :rating, :body, :created_at, :author,
              :business, :yelp_url, :yelp_username,
              :yelp_user_image, :is_yelp_review)
