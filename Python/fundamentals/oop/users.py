class User:

    def __init__(self, first_name, last_name, email_address, account_balance=0):
        self.first_name = first_name
        self.last_name = last_name
        self.email_address = email_address
        self.account_balance = account_balance

    def make_deposit(self, amount):
        self.account_balance += amount
        print(f'User {self.first_name} now has a balance of {self.account_balance}.')
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        print(f'User {self.first_name} now has a balance of {self.account_balance}.')
        return self

    def display_user_balance(self):
        print(f'User {self.first_name} has a balance of {self.account_balance}.')
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        print(f'User: {self.first_name} Balance: {self.account_balance}')
        return self


David = User('David', 'Modd', 'dm@gmail.com')
Angie = User('Angela', 'Modd', 'am@gmail.com')
Taylor = User('Taylor', 'Modd', 'tm@gmail.com')

David.make_deposit(500).make_deposit(500).make_deposit(500).make_withdrawal(1000).display_user_balance()
Angie.make_deposit(1000).make_deposit(1000).make_withdrawal(500).make_withdrawal(500).display_user_balance()
Taylor.make_deposit(300).make_withdrawal(50).make_withdrawal(50).make_withdrawal(50).display_user_balance()

David.transfer_money(Taylor, 100)
Taylor.display_user_balance()
