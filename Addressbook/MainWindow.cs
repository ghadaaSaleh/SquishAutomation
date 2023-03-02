/*********************************************************************
** Copyright (C) 2011 - 2021 froglogic GmbH.
** Copyright (C) 2022 The Qt Company Ltd.
** All rights reserved.
**
** This file is part of Squish.
**
** Licensees holding a valid Squish License Agreement may use this
** file in accordance with the Squish License Agreement provided with
** the Software.
**
** This file is provided AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE
** WARRANTY OF DESIGN, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
**
** See the LICENSE file in the toplevel directory of this package.
**
** Contact contact@froglogic.com if any conditions of this licensing are
** not clear to you.
**
**********************************************************************/
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Addressbook
{
    public partial class MainWindow : Form
    {
        private StatusBar statusBar;
        private Timer statusTimer;
        private bool dirty;
        private string currentFileName;
        private BindingList<Record> records = new BindingList<Record>();

        public MainWindow()
        {
            statusBar = new StatusBar();
            statusBar.Name = "statusBar";
            Controls.Add(statusBar);
            statusTimer = new Timer();
            statusTimer.Interval = 5000;
            statusTimer.Tick += new EventHandler(statusTimer_Tick);
            InitializeComponent();
            newFile();
            addressGrid.DataSource = records;
            setStatus("Ready");
        }

        private void statusTimer_Tick(object sender, EventArgs e)
        {
            statusTimer.Stop();
            statusBar.Text = "";
        }

        private void setStatus(string text)
        {
            statusTimer.Stop();
            statusBar.Text = text;
            statusTimer.Start();
        }

        private void newFile()
        {
            if (considerDirtyData())
            {
                records.Clear();
                updateRemoveActions();
                Text = "Address Book - Unnamed";
                currentFileName = "";
                dirty = false;
                setStatus("New Addressbook Created");
            }
        }

        private bool considerDirtyData()
        {
            if (!dirty)
            {
                return true;
            }

            DialogResult result = EnglishMessageBox.Show("Save unsaved changes?", "Address Book", MessageBoxButtons.YesNoCancel);
            if (result == DialogResult.Cancel)
            {
                return false;
            }

            if (result == DialogResult.Yes)
            {
                saveAddresses();
            }

            return true;
        }

        private void openFile()
        {
            OpenFileDialog dlg = new OpenFileDialog();
            dlg.Filter = "Address Files|*.adr";
            dlg.Title = "Address Book - Choose File";
            dlg.ShowDialog( this );
            if (dlg.FileName != "")
            {
                currentFileName = dlg.FileName;
                readData();
                Text = "Address Book - " + System.IO.Path.GetFileName(currentFileName);
                editToolStripMenuItem.Enabled = true;
                toolbarAdd.Enabled = true;
                setStatus("Loaded " + currentFileName);
            }
        }

        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            openFile();
        }

        private void quitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (considerDirtyData())
            {
                Close();
            }
        }

        private void newToolStripMenuItem_Click(object sender, EventArgs e)
        {
            newFile();
            editToolStripMenuItem.Enabled = true;
            toolbarAdd.Enabled = true;
        }

        private void addToolStripMenuItem_Click(object sender, EventArgs e)
        {
            addEntry();
        }

        private void toolbarAdd_Click(object sender, EventArgs e)
        {
            addEntry();
        }

        private void addEntry()
        {
            AddForm form = new AddForm();
            if ( form.ShowDialog( this ) == DialogResult.OK ) {
                int indexToInsertAt = 0;

                DataGridViewRow currentRow = addressGrid.CurrentRow;
                if ( currentRow != null )
                    indexToInsertAt = currentRow.Index;

                records.Insert( indexToInsertAt, new Record( form.Forename, form.Surname, form.Email, form.Phone ) );
                dirty = true;
                setStatus("Added " + form.Forename + " " + form.Surname);
            }
        }

        private void updateRemoveActions()
        {
            toolbarRemove.Enabled = addressGrid.SelectedCells.Count > 0;
            removeToolStripMenuItem.Enabled = toolbarRemove.Enabled;
        }

        private void addressGrid_SelectionChanged(object sender, EventArgs e)
        {
            updateRemoveActions();
        }

        private void removeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            removeEntries();
        }

        private void removeEntries()
        {
            foreach (DataGridViewRow row in addressGrid.SelectedRows) {
                string fullName = row.Cells[0].Value.ToString() + " " + row.Cells[1].Value.ToString();
                if (EnglishMessageBox.Show("Delete '" + fullName + "'?",
                                    "Address Book - Delete",
                                    MessageBoxButtons.YesNo) == DialogResult.Yes)
                {
                    addressGrid.Rows.Remove(row);
                    setStatus("Removed " + fullName);
                }
            }
            dirty = true;
        }

        private void toolbarRemove_Click(object sender, EventArgs e)
        {
            removeEntries();
        }

        private void saveAddresses()
        {
            if (currentFileName == "")
            {
                saveAddressesAs();
            }
            else
            {
                writeOutData();
            }
        }

        private void saveAddressesAs()
        {
            SaveFileDialog dlg = new SaveFileDialog();
            dlg.Filter = "Address Files|*.adr";
            dlg.Title = "Address Book - Save As";
            dlg.ShowDialog( this );
            if ( dlg.FileName != "" ) {
                currentFileName = dlg.FileName;
                writeOutData();
                Text = "Address Book - " + System.IO.Path.GetFileName(currentFileName);
                setStatus("Saved " + currentFileName);
            }
        }

        private void toolbarSave_Click(object sender, EventArgs e)
        {
            saveAddresses();
        }

        private void saveToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveAddresses();
        }

        private void saveAsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveAddressesAs();
        }

        private void writeOutData()
        {
            System.IO.StreamWriter stream = System.IO.File.CreateText(currentFileName);
            foreach ( DataGridViewRow row in addressGrid.Rows ) {
                string line = "";
                foreach ( DataGridViewCell cell in row.Cells ) {
                    string cellText = cell.Value.ToString();
                    cellText.Replace( "|", " " );
                    if ( line.Length > 0 )
                        line += "|";
                    line += cellText;
                }
                stream.WriteLine(line);
            }
            stream.Flush();
            stream.Close();
            dirty = false;
        }

        private void readData()
        {
            System.IO.StreamReader stream = System.IO.File.OpenText(currentFileName);
            records.Clear();
            while (!stream.EndOfStream)
            {
                string[] fields = stream.ReadLine().Split('|');
                records.Add(new Record(fields[0], fields[1], fields[2], fields[3]));
            }
            stream.Close();
            dirty = false;
        }

        private void toolbarOpen_Click(object sender, EventArgs e)
        {
            openFile();
        }

        private void toolbarNew_Click(object sender, EventArgs e)
        {
            newFile();
            editToolStripMenuItem.Enabled = true;
            toolbarAdd.Enabled = true;
        }
    }

    public class Record
    {
        public Record(string forename, string surname, string email, string phone)
        {
            Forename = forename;
            Surname = surname;
            Email = email;
            Phone = phone;
        }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
