#include <iostream>
#include <cmath>

std::string generateHammingCodeEvenParity(const std::string& data) {
    int r = 1; // Number of redundant bits

    // Calculate the number of redundant bits required
    while (std::pow(2, r) < data.length() + r + 1) {
        r++;
    }

    // Create a vector to store the Hamming code
    std::vector<int> hammingCode(data.length() + r);

    // Copy the data bits into the Hamming code vector
    int dataIndex = 0;
    int hammingIndex = 1;
    for (int i = 1; i <= hammingCode.size(); i++) {
        if ((i & (i - 1)) == 0) {
            hammingCode[i] = 0; // Initialize redundant bits to 0
        } else {
            hammingCode[i] = data[dataIndex] - '0';
            dataIndex++;
        }
    }

    // Calculate the redundant bits
    for (int i = 0; i < r; i++) {
        int count = 0;
        for (int j = 1; j < hammingCode.size(); j++) {
            if (((j >> i) & 1) == 1) {
                count ^= hammingCode[j];
            }
        }
        hammingCode[std::pow(2, i)] = count;
    }

    std::string hammingCodeString;
    for (int bit : hammingCode) {
        hammingCodeString += std::to_string(bit);
    }

    return hammingCodeString;
}

std::string generateHammingCodeOddParity(const std::string& data) {
    std::string evenParityCode = generateHammingCodeEvenParity(data);
    std::string oddParityCode;

    for (char c : evenParityCode) {
        if (c == '0') {
            oddParityCode += '1';
        } else {
            oddParityCode += '0';
        }
    }

    return oddParityCode;
}

int main() {
    std::string data = "1101"; // Change this to your binary string

    try {
        std::string hammingCodeEvenParity = generateHammingCodeEvenParity(data);
        std::cout << "Hamming Code with Even Parity: " << hammingCodeEvenParity << std::endl;

        std::string hammingCodeOddParity = generateHammingCodeOddParity(data);
        std::cout << "Hamming Code with Odd Parity: " << hammingCodeOddParity << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "An error occurred: " << e.what() << std::endl;
    }

    return 0;
}
