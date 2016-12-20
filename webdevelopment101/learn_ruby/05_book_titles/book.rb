class Book
    attr_accessor :title

    def title=(new_title)
        exclusions = %w(and the in of a an)
        @title = new_title.split.map do |word|
            exclusions.include?(word)? word : word.capitalize
        end
        @title[0].capitalize!
        @title = @title.join(' ')
    end
end
