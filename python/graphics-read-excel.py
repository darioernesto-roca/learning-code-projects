import pandas as pd
import matplotlib.pyplot as plt

# Read the Excel file
df = pd.read_excel('file.xlsx')

# Use the 'column1' and 'column2' columns from the DataFrame to create the plot
plt.plot(df['column1'], df['column2'])
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Gráfico de Línea')
plt.show()