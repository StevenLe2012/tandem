import { useEffect } from 'react';
import { Redirect } from 'expo-router';

// Fake "isLoggedIn" — replace with real logic
const isLoggedIn = false;

export default function Index() {
  useEffect(() => {
    // add splash screen delay here if needed
  }, []);

  return <Redirect href={isLoggedIn ? '/tabs/explore' : '/login'} />;
}
