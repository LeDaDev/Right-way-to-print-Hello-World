#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <unistd.h>

char str[] = "HeLlO wOrLd";

char randomChar() {
    const char characters[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
    int charactersLength = strlen(characters);
    return characters[rand() % charactersLength];
}

int main() {
    srand(time(NULL));
    char final[100] = "";
    int currentIndex = 0;

    while (final[currentIndex] != '\0' || str[currentIndex] != '\0') {
        char c = randomChar();
        final[currentIndex] = c;
        printf("%s\n", final);
        if (final[currentIndex] == str[currentIndex]) {
            currentIndex++;
        } else {
            final[currentIndex] = '\0';
        }
        usleep(10000);
    }

    return 0;
}
