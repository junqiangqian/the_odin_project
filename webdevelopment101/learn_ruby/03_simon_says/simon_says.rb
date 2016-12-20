#write your code here
def echo(message)
    message
end

def shout(message)
    message.upcase
end

def repeat(message, times = 2)
    ([message] * times).join(' ')
end

def start_of_word(message, n)
    message[0...n]
end

def first_word(message)
    message.split(' ')[0]
end

def titleize(words)
    cwords = words.split.map do |word|
        if %w(the and over).include?(word)
            word
        else
            word.capitalize
        end
    end
    cwords.first.capitalize!
    cwords.join(' ')
end
