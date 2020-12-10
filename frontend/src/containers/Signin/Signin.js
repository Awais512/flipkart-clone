import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/UI/Input';

const Signin = () => {
  return (
    <Layout>
      <Container>
        <h2 className='text-center mt-5'>Sign in </h2>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
