def add(a,b):
    return a + b
def sub(a,b):
    return a -b
def mul(a,b):
    return a * b
def div(a,b):
    return a / b
    
print("Choose Operation From Below")
print("1,Addition")
print("2.Subtraction")
print("3.Multiplication")
print("4.Divsion")

Choice = int(input("Enter A number To Perform Operation:"))

a = int(input("Enter a Number:"))
b = int(input("Enter a Number:"))

if Choice == 1:
    print(a,"+",b,"=",add(a,b))
elif Choice == 2:
    print(a,"-",b,"=",sub(a,b))
elif Choice == 3:
    print(a,"*",b,"=",mul(a,b))
elif Choice == 4:
    print(a,"/",b,"=",div(a,b))
else:
    print("Invalid Input")
