module "website" {
  source      = "./static-site" #TODO fetch it from s3
  domain_name = var.domain_name
}