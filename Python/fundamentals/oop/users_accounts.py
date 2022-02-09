class BankAccount:

    instances = []

    def __init__(self, balance=0, int_rate=0):
        self.balance = balance
        self.int_rate = int_rate
        BankAccount.instances.append(self)

    @classmethod
    def display(cls):
        #Prints insatnce in relation to location in memory
       print(cls.instances)
       # Prints first name of each instance
       for i in cls.instances:
             print(i.first_name)

    def display_user_balance(self):
        return self

    def make_deposit(self, amount):
        self.balance += amount
        return self

    def make_withdrawal(self, amount):
        if(self.balance > amount):
            self.balance -= amount
        return self

    def transfer_money(self, amount, user):
        self.balance -= amount
        user.balance += amount
        return self

    def interest(self):
        x = 0
        if(self.balance > 0):
            x = self.balance * self.int_rate
            self.balance += x
        return self

class User:

    def __init__(self, first_name, last_name, email_address):
        self.first_name = first_name
        self.last_name = last_name
        self.email_address = email_address
        self.account = BankAccount()

    # def addCheckingAccount(self, accountName, amount):
    #     self.accounts[accountName] = BankAccount()

    # def addSavingsAccount(self, accountName, amount):
    #     self.accounts[accountName] = BankAccount()

    # def addRothAccount(self, accountName, amount):
    #     self.accounts[accountName] = BankAccount(int_rate=.05)

    # def make_deposit(self, accountName, amount):
    #     self.accounts[accountName].make_deposit(amount)
    #     print(f'User: {self.first_name} Balance: {self.balance}')

    # def make_withdrawal(self, accountName, amount):
    #     self.accounts[accountName].make_withdrawal(amount)
    #     print(f"Sorry, {self.first_name} does not have the requested funds amount.")

    # def transfer_money(self, accountName, amount):
    #     self.accounts[accountName].transfer_money(amount)
    #     print(f'User: {self.first_name} Balance: {self.balance}')

    # def interest(self, accountName, amount):
    #     self.accounts[accountName].interest(amount)
    #     print(f'User: {self.first_name} Balance: {self.balance}')

    def display_user_balance(self):
        self.account.display_user_balance()
        print(f'User: {self.first_name} Balance: {self.account.balance}')


David = User('David', 'Modd', 'dm@gmail.com')
Kevin = User('Kevin', "The Goat", 'kg@gmail.com')

David.display_user_balance()



