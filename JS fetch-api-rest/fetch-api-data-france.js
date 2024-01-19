fetch('https://www.data.gouv.fr/api/1/swagger.json')
    .then(response => response.json())
    .then(data => {
        // Call the function to display the data
        displayData(data);
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error(error);
    });

    function displayData(data) {
        const container = document.getElementById('apiData');
            
            // Example: Displaying some specific parts of the data
            const basePath = document.createElement('p');
            basePath.textContent = `Base Path: ${data.basePath}`;
            container.appendChild(basePath);

            // You can loop through data and create elements for each piece of data you want to display
            // For example, displaying tags
            if (data.tags && data.tags.length > 0) {
                const tagsHeader = document.createElement('h2');
                tagsHeader.textContent = 'Tags';
                container.appendChild(tagsHeader);

                const tagsList = document.createElement('ul');
                data.tags.forEach(tag => {
                    const listItem = document.createElement('li');
                    listItem.textContent = tag.name;
                    tagsList.appendChild(listItem);
                });
                container.appendChild(tagsList);
            }
    }
