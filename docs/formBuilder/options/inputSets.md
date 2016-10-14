# inputSets
Define an entire group of fields to be added to the stage at a time. It's like field templates for your form template.

## Usage
```javascript
var options = {
  inputSets: [
      {
        label: 'User Details',
        name: 'user-details', // optional - one will be generated from the label if name not supplied
        showHeader: true, // optional - Use the label as the header for this set of inputs
        fields: [
            {
              type: 'text',
              label: 'First Name',
              className: 'form-control'
            },
            {
              type: 'select',
              label: 'Profession',
              className: 'form-control',
              values: [
                {
                  label: 'Street Sweeper',
                  value: 'option-2',
                  selected: false
                },
                {
                  label: 'Brain Surgeon',
                  value: 'option-3',
                  selected: false
                }
              ]
            },
            {
              type: 'textarea',
              label: 'Short Bio:',
              className: 'form-control'
            }
          ]
      },
        {
          label: 'User Agreement',
          fields: [
          {
            type: 'header',
            subtype: 'h2',
            label: 'Terms &amp; Conditions',
            className: 'header'
          },
          {
            type: 'paragraph',
            label: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          },
          {
            type: 'paragraph',
            label: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
          },
          {
            type: 'checkbox',
            label: 'Do you agree to the terms and conditions?',
          }
        ]
        }
      ]
};
$(container).formBuilder(options);
```
<p data-height="725" data-embed-version="2" data-theme-id="22927" data-slug-hash="YGjAKo" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>
