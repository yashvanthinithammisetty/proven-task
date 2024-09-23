import React, { useState } from 'react';
import { Stepper, Text } from '@mantine/core';
import './Stepper.css';

import { Space } from '@mantine/core';
import InputDocs from './InputDocs';
import ProductCard from './Product';
import AnalysisDetails from './AnalysisDetails';
import AnalysisTable from './AnalysisTable'
import ProductDetails from './Productdetails';
function Steppper() {
  const labels = ['Input Docs', 'Product', 'Analysis', 'Export'];
  const [active, setActive] = useState(0);
 
  const renderStepContent = () => {
    switch (active) {
      case 0:
        return <InputDocs/>;
      case 1:
        return (
          <>
          <ProductCard/>
            <br/>
        <ProductDetails/>
          </>
        );
      case 2:
        return (
          <>
          <ProductCard/>
            <br/>
        <AnalysisDetails/>
          </>
        );
      case 3:
        return (
          <>
    <AnalysisTable/>
      
          </>
        );
     
      default:
        return <InputDocs />; // Default case if no match is found
    }
  };
 
  return (
    <div>
      <Stepper active={active} onStepClick={setActive} classNames={{ step: 'custom-step' }}>
        {labels.map((label, index) => (
          <Stepper.Step
            key={index}
            className="step"
            // style={{
            //   backgroundColor:
            //     index === active ? 'navy' :
            //     index < active ? 'green' : '',  
            //   color:
            //     index === active ? '#fff' :
            //     index < active ? '#fff' : '',  
            // }}
          />
        ))}
      </Stepper>
 <Space h="sm"></Space>
      <div className="step-labels">
        {labels.map((label, index) => (
          <Text
            key={index}
            className={`step-label ${index === active ? 'active-label' : ''}`}
            style={{
              color:
                index === active ? 'navy' :
                index < active ? 'green' : '#666',  
            }}
          >
            {label}
          </Text>
        ))}
      </div>
      <Space h="xl" />
      <div className="step-content">
      
        {renderStepContent()}
      </div>
    </div>
  );
}
 
export default Steppper;
 