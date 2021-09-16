import React from 'react';

export default function FormField({label, type, placeholder}) {
  return (
    <div class="field">
      <label class="label">{label}</label>
      <div class="control">
        <input class="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}
