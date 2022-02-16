// Linked to https://app.airplane.dev/t/testtest [do not edit this line]

// Put the main logic of the task in this function.
export default async function(params) {
  console.log('parameters:', params);

  // You can return data to show outputs to users.
  // Outputs documentation: https://docs.airplane.dev/tasks/outputs
  return [
    {element: 'hydrogen', weight: 1.008},
    {element: 'helium', weight: 4.0026},
  ];
}
