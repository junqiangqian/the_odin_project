#write your code here
def add(a, b)
    a + b
end

def subtract(a, b)
    a - b
end

def sum(arr)
    arr.inject(0, :+)
end

def multiply(arr)
    arr.inject(1, :*)
end

def power(a, b)
    a ** b
end

def factorial(i)
    i < 2? 1 : i * factorial(i - 1)
end
