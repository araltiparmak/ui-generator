module "website" {
  source          = "./static-site" #TODO fetch it from s3
  domain_name     = local.domain_name
  s3_acl          = "private"
  with_cloudfront = true
}
