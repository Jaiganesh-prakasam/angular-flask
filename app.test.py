import unittest
from blueprints import app

class BasicTestCase(unittest.TestCase):

    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/')
        print (response.status_code)
        self.assertEqual(response.status_code, 200)

    def test_index1(self):
        tester = app.test_client(self)
        response = tester.get('/cpu')
        print (response.status_code)
        self.assertEqual(response.status_code, 200)

    def test_index2(self):
        tester = app.test_client(self)
        response = tester.get('/gpu')
        print (response.status_code)
        self.assertEqual(response.status_code, 200)

    def test_index3(self):
        tester = app.test_client(self)
        response = tester.get('/ram')
        print (response.status_code)
        self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    unittest.main()