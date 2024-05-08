# IAM Policy for S3 Access

resource "aws_iam_policy" "s3_access_policy" {
  name = "s3-file-access-policy"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"  # Optional, for listing bucket contents
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",  # Replace with your bucket name
        "arn:aws:s3:::your-bucket-name/*"  # For access to all objects within the bucket
      ]
    }
  ]
}
EOF
}

# IAM Role for S3 Access (No Assume Role Policy Needed)

resource "aws_iam_role" "s3_access_role" {
  name = "s3-file-access-role"
}

resource "aws_iam_role_policy_attachment" "attach_policy" {
  role       = aws_iam_role.s3_access_role.id
  policy_arn = aws_iam_policy.s3_access_policy.arn
}