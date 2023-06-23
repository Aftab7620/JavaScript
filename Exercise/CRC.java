import java.util.Scanner;

public class CRC 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Frame: ");
        String inputStr = scanner.nextLine();
        System.out.print("Enter Key: ");
        String genStr = scanner.nextLine();

        int genlen = genStr.length();
        int msglen = inputStr.length();
        char[] input = (inputStr + "0".repeat(genlen - 1)).toCharArray();
        char[] gen = genStr.toCharArray();
        char[] rem = input.clone();

        for (int i = 0; i < msglen; i++) {
            char quotient = rem[i];

            if (quotient == '0') {
                continue;
            }

            for (int j = 0; j < genlen; j++) {
                rem[i + j] = (rem[i + j] == gen[j]) ? '0' : '1';
            }
        }

        System.out.print("\nQuotient will be: " + inputStr);
        System.out.print("\nRemainder will be: " + new String(rem, msglen, genlen - 1));
        System.out.print("\nFinal data will be: " + inputStr + new String(rem, msglen, genlen - 1));
    }
}
