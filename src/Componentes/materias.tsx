import React, { useState } from 'react';
import { Flex, Typography } from 'antd';

const Materia = ({materias}:{materias:string}) => {
  const [rows] = useState(2);
  const [expanded, setExpanded] = useState(false);

  return (
    <Flex gap={16} vertical>

      <Typography.Paragraph
        ellipsis={{
          rows,
          expandable: 'collapsible',
          expanded,
          onExpand: (_, info) => setExpanded(info.expanded),
          symbol:((expanded: boolean) => {
            if (expanded) {
                return "Encolher"
            }else{
                return "Expandir"
            }
          })	    
        }}
        
        
      >
        {materias.repeat(
          20,
        )}
      </Typography.Paragraph>
    </Flex>
  );
};

export default Materia;