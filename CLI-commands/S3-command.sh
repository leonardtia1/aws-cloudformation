https://medium.com/@kumargaurav1247/aws-s3-cli-commands-f367d0e10f4b#:~:text=aws%20cp%20will%20copy%20a,it%20on%20the%20target%20path

# List of buckets
aws s3 ls

# Contents of bucket
aws s3 ls artifacts-tia
OR
aws s3 ls s3://artifacts-tia

# ls command will recursively list objects in a bucket and files inside the subfolders
aws s3 ls s3://gaurav-test-today/ --recursive

# Copying a file from S3 to S3
aws s3 cp s3://gaurav-test-today/DB.txt s3://gaurav-test-tmrw

# If you want to give a new name in the destination bucket
aws s3 cp s3://gaurav-test-today/HCI.txt s3://gaurav-test-tmrw/NEWHCI.txt

# Copying an S3 object to local
aws s3 cp s3://gaurav-test-today/DB.txt MyFile.txt

# Copying a local file to S3
aws s3 cp MyFile.txt s3://gaurav-test-today

# Copying a local file to S3 with an expiration date
aws s3 cp test.txt s3://mybucket/test2.txt --expires 2014–10–01T20:30:00Z

# Recursively copying S3 objects to another bucket
aws s3 cp s3://mybucket/ s3://mybucket2/ --recursive

# Remove an empty bucket
aws s3 rb s3://exmaple-today-bucket

# Remove a non-empty bucket
aws s3 rb s3://exmaple-today-bucket --force

# Delete a file
aws s3 rm s3://gaurav-test-today/HCI.txt
# Recursively deletes all objects
aws s3 rm s3://xyxyxyxyxyxyxyxyxxy --recursive

# Sync from local to a bucket
aws s3 sync . s3://mybucket

# create a bucket in a region
aws s3 mb s3://xyxyxyxyxyx --region us-west-1

# Create a public bucket
aws s3 mb s3://xyz/
aws s3 mb s3://artifacts-tia

$ aws s3 cp 03-01-cfn-ec2-instance-create.yml s3://artifacts-tia