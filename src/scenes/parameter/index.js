import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Separator } from 'native-base';

export class ParameterScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Separator bordered>
            <Text>Basic Information</Text>
          </Separator>
          <ListItem 
            icon
            // onPress={() => {
            //   this.props.navigation.navigate('Profile')
            // }}
          >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
            <Right>
              <Text>User</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Device Connected</Text>
            </Body>
            <Right>
              <Text>100%</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Language of App</Text>
            </Body>
            <Right>
              <Text>English</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Notification</Text>
            </Body>
            <Right>
              <Text>Once a Day</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <Separator bordered>
            <Text>System Information</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
                <Text>App Version</Text>
            </Body>
            <Right>
                <Text>1.0</Text>
                <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <Separator bordered>
            <Text>More Information</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>FAQ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Send Us Your Feedback</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}