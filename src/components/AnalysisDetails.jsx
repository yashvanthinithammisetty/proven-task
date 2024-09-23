import React from 'react';
import { Group, Button, Text, Container } from '@mantine/core';
import { IconRun } from '@tabler/icons-react'; // Assume this is the running icon used in the image

const AnalysisDetails = () => {
  return (
    <Container  size="lg">
      {/* Header with text and icon */}
      <Group position="apart" size="sm">
        <Group>
          <Text weight={700} size="lg">
            Analysis Details
          </Text>
          <IconRun size={24} />
        </Group>
      </Group>

      {/* Spacing between header and buttons */}
      <div style={{ height: '100px' }}></div> 

      {/* Buttons aligned to the left and right */}
      <Group position="apart">
        <Button color="indigo" radius="md" size="md">
          Save
        </Button>
        <Button color="indigo" radius="md" size="md">
          Export
        </Button>
      </Group>
    </Container>
  );
};

export default AnalysisDetails;
