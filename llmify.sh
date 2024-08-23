#!/bin/bash

# Output file
output_file="llm_upload.txt"

# Function to process files
process_files() {
    local dir=$1
    find "$dir" -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" \) | while read -r file; do
        # Skip files in the components/ui and components/emails directories
        if [[ "$file" == components/ui/* || "$file" == components/emails/* ]]; then
            continue
        fi
        echo "=== File: $file ===" >> "$output_file"
        echo "" >> "$output_file"
        cat "$file" >> "$output_file"
        echo "" >> "$output_file"
        echo "=== End of $file ===" >> "$output_file"
        echo "" >> "$output_file"
        echo "" >> "$output_file"
    done
}

# Clear or create the output file
> "$output_file"

# Process each directory
for dir in app components lib; do
    if [ -d "$dir" ]; then
        echo "Processing $dir directory..."
        process_files "$dir"
    else
        echo "Directory $dir not found, skipping..."
    fi
done

echo "File compilation complete. Output saved to $output_file"
