import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/UI/Input';

const Signup = () => {
  return (
    <Layout>
      <Container>
        <h2 className='text-center mt-5'>Register </h2>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label='First Name'
                type='text'
                placeholder='Enter Your First Name'
                value=''
                onChange={() => {}}
              />

              <Input
                label='Last Name'
                type='text'
                placeholder='Enter Your Last Name'
                value=''
                onChange={() => {}}
              />

              <Input
                label='Email'
                type='email'
                placeholder='Enter Your Email'
                value=''
                onChange={() => {}}
              />

              <Input
                label='Password'
                type='password'
                placeholder='Enter Password'
                value=''
                onChange={() => {}}
              />

              <Button variant='primary' type='submit'>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
