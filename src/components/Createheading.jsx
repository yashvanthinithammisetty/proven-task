import React from 'react';
import { Title, Group } from '@mantine/core';
import { FaDatabase } from 'react-icons/fa';

function Create() {
  return (
    <Group style={{ position: 'absolute', top: '20px', left: '20px' }}>
      <FaDatabase size={30} />
      <Title size="md" order={1} weight={700}>
        Create Master Data
      </Title>
    </Group>
  );
}

export default Create;
