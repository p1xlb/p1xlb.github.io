<?php
    require "koneksi.php";

    $result = mysqli_query($conn, "select * from mahasiswa");
    $mahasiswa = [];
    
    while($row = mysqli_fetch_assoc($result))
    {
        $mahasiswa[] = $row;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pertemuan 5 - CRUD</title>
</head>
<body>
    <a href="tambah.php">Tambah</a>
    <h1>Data Mahasiswa</h1>
    <table border="1">
        <tr>
            <th>NO</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Kelas</th>
            <th>Angkatan</th>
            <th colspan="2">Aksi</th>
        </tr>
        <tr>
            <?php $i = 1; foreach($mahasiswa as $mhs) :?>
            <td><?=$i; ?></td>
            <td><?=$mhs["nim"]?></td>
            <td><?=$mhs["nama"]?></td>
            <td><?=$mhs["jenis_kelamin"]?></td>
            <td><?=$mhs["kelas"]?></td>
            <td><?=$mhs["angkatan"]?></td>
            <td><a href="">Edit</a></td>
            <td><a href="">Hapus</a></td>
        </tr>
        <?php $i++; endforeach; ?>
    </table>
</body>
</html>