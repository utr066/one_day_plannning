import React, { Component } from 'react';
import Title from '../components/Title'
import SubmitForm from '../containers/SubmitForm'

const WriteModalContent = props => {
  const styles = {
    content: {
      left: 0,
      right: 0,
      margin: 'auto',
      textAlign: 'center',
    },
  };

  return (
    <div className={props.class} style={styles.content}>
      <Title variant="title">
        AddTodo
      </Title>
      <SubmitForm>送信</SubmitForm>
    </div>
  )
}

export default WriteModalContent