$(document).ready(function() {
    // Define the URL for the API
    const apiUrl = 'https://detrac.id/checkoutcaldera/tbl_bib_bali.php';

    // Function to populate tables with data from API
    function populateTable(tabId, tableClass) {
        $.ajax({
            url: apiUrl,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                // Filter data based on tab (assuming API data contains a 'distance' field)
                const filteredData = data.filter(item => item.distance === tabId);
                
                let rows = '';
                filteredData.forEach(item => {
                    rows += `
                        <tr>
                            <td>${item.BIB}</td>
                            <td>${item.Name}</td>
                            <td>${item.Gender}</td>
                            <td>${item.WS1_Black_Lava}</td>
                            <td>${item.Finish}</td>
                            <td>${item.Amount_of_Time}</td>
                            <td>${item.Rank}</td>
                            <td>${item.Status}</td>
                        </tr>
                    `;
                });
                $(tableClass).html(rows);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    // Populate tables for each tab
    populateTable('10KM', '.u-table-body-1');
    populateTable('25KM', '.u-table-body-2');
    populateTable('50KM', '.u-table-body-3');
    populateTable('80KM', '.u-table-body-4');
});
