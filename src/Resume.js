import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Resume = () => {
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4'
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        }
      });

  return (
    <div>
      <iframe src='././sanjayResume.pdf' width="100%" height="1000vh"></iframe>
    </div>
  )
}

export default Resume
