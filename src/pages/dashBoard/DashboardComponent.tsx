import { Flex, Spacer, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

function DashboardComponent() {
  return (
    <div className='home-container'>
      <Flex width="90%" height={500}>
        <Container borderWidth={2} width="50%"
          height="100%" borderColor={'black'} borderRadius={10}
        >
          A
        </Container>
        <Container width="40%"
          height="100%"
        >
          <Text>Classement</Text>
          <Flex justifyContent="center" alignItems="center" height="100%">
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Flex>
        </Container>
      </Flex>
    </div>
  )
}

export default DashboardComponent