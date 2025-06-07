import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function TermsScreen() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Terms and Conditions</Text>
            <Text style={styles.body}>
                <Text style={styles.bold}>Tandem is a space for trust, joy, and shared memories between real friends.</Text>
                {' '}By using the app, you <Text style={styles.bold}>agree</Text> to the following:{'\n\n'}
                Be accountable to your group; share activities and moments with intention; respect the shared values of your group.{"\n\n"}
                Share respectfully; only post content your group would feel comfortable seeing; no unsolicited or inappropriate content.{"\n\n"}
                Be real, not performative; Tandem is for close connections, not for clout; focus on genuine moments.{"\n\n"}
                Zero tolerance for harm; bullying, harassment, and exclusionary behavior will result in removal from the app.{"\n\n"}
                Your content is private; your group's posts are visible only to your group; you can delete them anytime.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>ACCEPT AND CONTINUE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF6F2',
        padding: 24,
        paddingTop: 60,
        alignItems: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
        color: '#222',
        marginBottom: 18,
        alignSelf: 'flex-start',
    },
    body: {
        fontSize: 16,
        color: '#222',
        marginBottom: 36,
        lineHeight: 24,
        alignSelf: 'flex-start',
    },
    bold: {
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#FFADAD',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 32,
        alignSelf: 'center',
        marginTop: 12,
    },
    buttonText: {
        color: '#222',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
}); 