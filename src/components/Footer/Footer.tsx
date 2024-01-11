import { Box, Center, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.200" p={4}>
      <Center>
        <Text>© 2024 Distrib magic </Text>
        <Text mx={2}>|</Text>
        <Link href="/politique-de-confidentialite">
          Politique de confidentialité
        </Link>
        <Text mx={2}>|</Text>
        <Link href="/mentions-legales">Mentions légales</Link>
      </Center>
    </Box>
  );
}

export default Footer;
