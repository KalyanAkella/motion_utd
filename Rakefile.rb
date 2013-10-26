current_directory = Dir.pwd

task :package do
  package_path = "#{current_directory}/chrome-extension.crx"
  File.delete(package_path) if File.exists? package_path
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"  --pack-extension=#{current_directory}/chrome-extension --pack-extension-key=#{current_directory}/chrome-extension.pem`
end