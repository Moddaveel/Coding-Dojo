# <!---  Updating Values in Dictionaries and Lists  ---!>


x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]=15
print(x)

students[0]['last_name'] = 'Bryant'
print(students)

sports_directory['soccer'][0] = 'Andres'
print(sports_directory['soccer'])

z[0]['y'] = 30
print(z[0]['y'])


# <!---  Iteration Through a List of Dictionaries ---!>


students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(students):
    for s in students:
        first = 'first_name'
        last = 'last_name'
        print(first, s[first], last, s[last])

iterateDictionary(students)


#Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary. For example, iterateDictionary2('first_name', students) should output:#


students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary2(key_name, some_list):
    for s in some_list:
        print(s[key_name])

iterateDictionary2('first_name', students)


def iterateDictionary2(key_name, some_list):
    for s in some_list:
        print(s[key_name])

iterateDictionary2('last_name', students)


#<!---  Iterate Through a Dictionary with List Values          ---!>


# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. 


dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    for d in some_dict:
        key1 = 'locations'
        key2 = 'instructors'
        count1 = len(some_dict[key1])
        count2 = len(some_dict[key2])
        count3 = count2 + count1
    print(key1,some_dict[key1], count1)
    print(key2, some_dict[key2], count2)
    print(count3)

printInfo(dojo)