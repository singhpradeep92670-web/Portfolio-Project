#include <iostream>
using namespace std;

int main() {
    string name;
    int roll;
    int m1, m2, m3;
    int total;
    float percentage;

    cout << "Enter Student Name: ";
    getline(cin, name);

    cout << "Enter Roll Number: ";
    cin >> roll;

    cout << "Enter Marks of 3 Subjects:\n";
    cin >> m1 >> m2 >> m3;

    total = m1 + m2 + m3;
    percentage = total / 3.0;

    cout << "\n----- Result -----\n";
    cout << "Name: " << name << endl;
    cout << "Roll No: " << roll << endl;
    cout << "Total Marks: " << total << endl;
    cout << "Percentage: " << percentage << "%" << endl;

    if (percentage >= 33)
        cout << "Status: PASS ✅";
    else
        cout << "Status: FAIL ❌";

    return 0;
}
