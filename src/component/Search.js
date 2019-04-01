import React from 'react';
import { InputGroup, Input, Icon } from 'rsuite';

const styles = {
    width: 300,
    marginBottom: 10,
    left: 600,
    right: 0
};
  
export default class Search extends React.Component {
      render() {
          return (
            <div>
              <InputGroup style={styles}>
                <Input  placeholder="搜索"/>
                <InputGroup.Button>
                  <Icon icon="search" />
                </InputGroup.Button>
              </InputGroup>

            </div>
          );
      }
}
  
  