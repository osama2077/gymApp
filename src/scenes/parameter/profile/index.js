import React, { Component } from 'react';
import { Container, Input, Content, Item, Form, Button, Text } from 'native-base';

export default class ParameterScreen extends Component {
  render() {
    return (
        <Container>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Name" />
                    </Item>
                    <Item>
                        <Input placeholder="Age" />
                    </Item>
                    <Item>
                        <Input placeholder="Weight" />
                    </Item>
                    <Item>
                        <Input placeholder="Height" />
                    </Item>
                    <Button><Text>Save</Text></Button>
                </Form>
            </Content>
        </Container>
    );
  }
}