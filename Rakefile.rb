current_directory = Dir.pwd

task :package do
  package_path = "#{current_directory}/chrome-broker.crx"
  File.delete(package_path) if File.exists? package_path
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"  --pack-broker=#{current_directory}/chrome-broker --pack-broker-key=#{current_directory}/chrome-broker.pem`
end