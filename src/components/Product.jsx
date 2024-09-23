import React from 'react';
import { Card, Grid, TextInput, Button, Container } from '@mantine/core';

const ProductCard = () => {
  return (
    <Container size="lg">
           <Card shadow="sm" padding="lg" radius="md" size="lg" withBorder>
      <Grid gutter="md">
        <Grid.Col span={6}>
          <TextInput label="Product / Material Code" placeholder="Enter" size='sm'/>
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Spec No." placeholder="Enter" size='sm'/>
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Method No." placeholder="Enter" size='sm' />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Market / Pharmacopeia" placeholder="Enter" size='sm'/>
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Grade" placeholder="Enter" size='sm' />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Sampling Point" placeholder="Enter"  size='sm'/>
        </Grid.Col>
      </Grid>
      <Button 
        variant="outline" 
        radius="md" 
        style={{ position: 'absolute', bottom: 20, right: 20 }}
      >
        Save
      </Button>
    </Card>
    </Container>
 
  );
};

export default ProductCard;

