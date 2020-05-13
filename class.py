class Car:
  def __init__(self, brand, fare, capacity):
    self.brand = brand
    self.fare = fare
    self.capacity = capacity
    
c1 = Car("i20", 20, 4)
c2 = Car("Innova", 40, 7)
c3 = Car("Swift", 15, 5)
print("Choose Your Car From Below List")
print("1.Hyundai")
print("2.Innova")
print("3.Swift")

car = int(input("choose Your Car:"))
if car == 1:
    print("i20 Price is 20 per KM")
elif car == 2:
    print("Innova Price is 40 per KM")
elif car == 3:
    print("Swift Price is 15 per KM")
else:
    print("invalid input")
    
    
