#1. Basic - Print all integers from 0 to 150.

#2. Multiples of Five - Print all the multiples of 5 from 5 to 1,000

#3. Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".

#4. Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.

#5. Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.

#6.Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, 
# print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, 
# the loop should print 3, 6, 9 (on successive lines)


for x in range(0, 151):
    print(x)


for y in range(5, 1005, 5):
    print(y)


for z in range(1, 101):
    if z % 10 == 0:
        print('Coding Dojo')
    elif z % 5 == 0:
        print('Coding')
    else:
        print(z)


sum = 0
for a in range(1,500001, 2):
    sum += a
    print(sum)


for p in range(0, 2018, -4):
    print(p)


for d in range(2, 11, 2):
    if d % 2 == 0:
        print(d)

for i in range(3, 12, 3):
    if i % 3 == 0:
        print(i)

for j in range(5, 50, 5):
    if j % 5 == 0:
        print(j)