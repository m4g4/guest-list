import React, { ReactElement } from "react";
import { Input } from 'semantic-ui-react';

export function useInput(opts?: {[key: string]: any}): [string, ReactElement] {
  const [value, setValue] = React.useState('');
  const input = <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        iconPosition='left'
        {...opts}
    />

  return [value, input];
}