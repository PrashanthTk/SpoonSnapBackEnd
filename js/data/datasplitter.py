import os,errno
valid_folder="C:/Validation"
for root, dirs, files in os.walk("./Image_Dataset", topdown=False):
	
    for directory in dirs:
        #print(os.listdir(os.path.join(root,directory)))
        label = directory.split(' ')[0]
        dirname="C:/wamp/www/SpoonSnapBackEnd/js/data/Image_Dataset/" + directory
        #print dirname
        filelist=os.listdir(dirname)
        #enter a directory
        #split filelist into 75% -> traindata and 25% -> testdata
        #for each img in testdata move to a new folder 
        print dirname
        valdirname=valid_folder+'/'+directory
        traindata=filelist[:(3*len(filelist)//4)]
        testdata=filelist[(3*len(filelist)//4)+1:]
        for img in testdata:
            '''
            os.makedirs(valdirname)
            os.rename(dirname+'/'+img,valid_folder+'/'+directory+'/'+img)
            #print directory+'/'+img +' '+label 
            '''
            if not os.path.exists(valdirname):
                try:
                    os.makedirs(valdirname)
                except OSError as exc: # Guard against race condition
                    if exc.errno != errno.EEXIST:
                        raise
            os.rename(dirname+'/'+img,valid_folder+'/'+directory+'/'+img)