# frozen_string_literal: true

class GiftSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :dob, :gift
end
